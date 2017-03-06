# Android SQLite Viewer

A Library to edit and update the SQLite Datatase on Android from your Computer.

## Requirements
* Your PC and Android Device (or Emulator) should be connnected in the same network.

## Overview
* Download and Install the Server ( Android SQLite Viewer Server )
* Add the Android SQLite Viewer library to your Android Project
* Invoke and Intialize it in your Project and Start the Service
* Specify the IP Address and Port where the Server is running
* Run your Android Application and open the Web Interface in the computer to view and edit the Database

## Installation

### Installing the Server

Clone the Repo [Android SQLite Viewer Server](https://github.com/a6un/Android-SQLiteViewer-Server)

``git clone https://github.com/a6un/Android-SQLiteViewer-Server.git``

Naviate into the folder

``cd Android-SQLiteViewer-Server``

Install and Update the NPM Packages

``npm install``

### Running the Server

Start the Server

``node server.js``

## Configuration

### Android Setup

Download the [latest JAR](#) or grab via Gradle:

``compile 'a6un:android-sqliteviewer:0.1.0'``

Now configure it for the Server. Add the following code in your main activity

```
//  Specify your database names

String databases[] = {
        "database1",
        "database1"
    };
    
// Trigger the Service, pass the databases and server IP, Port Details.  
    
SQLiteService sqliteservice = new SQLiteService(databases,"192.168.1.102:8000"); 
// Don't forget the IP and Port Details

```


## Accessing the Databases

Open url ``localhost:<your port>`` in the browser.

## How it works
![](https://github.com/JacobSamro/Android-SQLiteViewer/blob/assets/Android%20SQLite%20Viewer.png?raw=true)

## Technologies used
* Android SDK
* Node.JS
* Socket.IO
