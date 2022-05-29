from django import template
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse

from django.shortcuts import render
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt 


@login_required(login_url="/login/")
def index(request):
    context = {'segment': 'index'}

    html_template = loader.get_template('home/index.html')
    return HttpResponse(html_template.render(context, request))


@login_required(login_url="/login/")
def pages(request):
    context = {}
    # All resource paths end in .html.
    # Pick out the html file name from the url. And load that template.
    try:

        load_template = request.path.split('/')[-1]

        if load_template == 'admin':
            return HttpResponseRedirect(reverse('admin:index'))
        context['segment'] = load_template

        html_template = loader.get_template('home/' + load_template)
        return HttpResponse(html_template.render(context, request))

    except template.TemplateDoesNotExist:

        html_template = loader.get_template('home/page-404.html')
        return HttpResponse(html_template.render(context, request))

    except:
        html_template = loader.get_template('home/page-500.html')
        return HttpResponse(html_template.render(context, request))


def indexPage(request):
    #Read the Data
    df=pd.read_csv('../static/cars_engage_2022.csv')
    df=clean_data(df)
    price=(df['Sales']).sum()
    #first graph
    count_of_make=(df[['Make','Model']].groupby("Make").apply(len))
    count_of_model=count_of_make.unique().tolist()
    make=count_of_make.index.tolist()

    context={'price':price,'count_of_model':count_of_model,'make':make}
    return render(request,'index.hmtl',context)

def clean_data(df):
    # Deleting the unwanted index column as we can access index in pandas
    df=df.drop(["Unnamed: 0"],axis=1,inplace=True)
    
    #take the columns only needed for the graphs
    df2=df[['Make','Variant','Sales','Ex-Showroom_Price','Cylinders','Drivetrain','Engine_Location','Fuel_Type','Body_Type','Doors','City_Mileage','Highway_Mileage','ARAI_Certified_Mileage','Kerb_Weight','Gears','Power_Steering','Power_Seats','Keyless_Entry','Power','Torque','Seating_Capacity','Type','12v_Power_Outlet','Boot_Space','Number_of_Airbags']]

    ##CLEANING DATA
    #combine the Make and Model columns into Car column
    df2["Car"] = df2['Make'] +"-"+ df2["Model"]

    # Replacing the characters and converting to numeric
    df['Sales'] = df['Sales'].str.replace('$','',regex=False)
    df['Sales'] = df['Sales'].str.replace('.','',regex=False)
    df['Sales'] = df['Sales'].astype(float)
    df['Ex_Showroom_Price'] = df['Ex_Showroom_Price'].str.replace('Rs. ','',regex=False)
    df['Ex_Showroom_Price'] = df['Ex_Showroom_Price'].str.replace(',','',regex=False)
    df['Ex_Showroom_Price'] = df['Ex_Showroom_Price'].astype(int)

    

    ##Missing data detection and filling them with appropriate value
    df2.Cylinders=df2['Cylinders'].transform(impute_median)
    df2.Valves_Per_Cylinder=df2['Valves_Per_Cylinder'].transform(impute_median)    
    df2.Doors=df2['Doors'].transform(impute_median)

    return df2

#define a function impute_median
def impute_median(series):
    return series.fillna(series.median().astype(int))

#define a function impute_mean
def impute_mean(series):
    return series.fillna(series.mean().astype(int))

#define a function impute_mode
def impute_mode(series):
    return series.fillna(series.mode().astype(str))