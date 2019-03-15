from flask import Flask,request
import os
import socket
import phone
import json
import socket
app = Flask(__name__)

@app.route("/<cellnumber>")
def hello(cellnumber):
   hostname=socket.gethostname()
   rate = phone.getCheapestRate(cellnumber)
   operator = phone.getCheapestOperator(cellnumber)
   output={
       "hostname":hostname,
       "phone":cellnumber,
       "rate":rate,
       "operator":operator
   }
   output=json.dumps(output)
   return output

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)