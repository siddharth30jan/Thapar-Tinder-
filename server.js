/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const express = require('express');
const fs = require('fs');
const app = express();
var https = require('https');
const passport = require('./passport');
const session = require('express-session');


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(session({
	secret: 'somesecretstring'
}));
app.use(passport.initialize());
app.use(passport.session());
//app.use(flash());

app.use(express.static(__dirname + '/build'));




app.use('/signup',require('./routes/signup'));
app.use('/login',require('./routes/login'));
app.use('/like',require('./routes/like'));
app.use('/dislike',require('./routes/dislike'));

app.get('/start', (req, res) => {
	console.log("redirecting /start, sess: "+req.user);
	if (!req.user)
		res.redirect('/signup.html');
	else
		res.redirect('/main.html');
});

app.listen(8083,function(){
	console.log('Listening on *:8081');
});

