import os

from flask import Flask, render_template, request, flash, redirect, session, g, abort


app = Flask(__name__)


@app.route('/', methods=["GET"])
def homepage():
    """Show homepage:"""

        
    return render_template('homepage.html')

@app.route('/contact', methods=["GET"])
def contacts():
    """Show contact information:"""

        
    return render_template('contact.html')
    

@app.route('/projects', methods=["GET"])
def projects():
    """Show contact information:"""

        
    return render_template('projects.html')
    

