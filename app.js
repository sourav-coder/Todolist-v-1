const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const date = require(__dirname+'/date.js')


let items= ['Buy Food','Cook Food','Go Gym']
let workitems = []

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.listen(3000, function (req, res) {
    console.log('Server started at Port 3000');
});


app.get('/', function (req, res) {

   
    let day =date()

    console.log(day);

 



    res.render('list', { listtitle: day , newlistitems:items})


})



// work route :
app.get('/work',function(req,res){

    console.log(workitems);

    // listtiltle :'Work'  as to identify the work list items
    res.render('list',{listtitle:'Work',newlistitems:workitems})
})





app.post('/',function(req,res){

    var item = req.body.newItem;

    console.log(req.body)
    if (req.body.button === 'Work'){
        workitems.push(req.body.newItem)
        res.redirect('/work')
    }
    else{
    console.log(item);
       
    items.push(item)
    // redirect to home route --
    res.redirect('/')
    }

    
})


