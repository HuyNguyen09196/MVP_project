const express= require('express');
const app=express();
app.use(express.json());
const{Pool}=require('pg');
const cors=require('cors');
app.use(cors());
const config=require('./config')[process.env.NODE_ENV||"dev"];
const PORT=config.port;
const pool= new Pool({
    connectionString: config.connectionString
});
pool.connect();
app.use(express.static('public'))
// app.get('/',(req,res)=>{
//     res.send('Hello')
// })

app.get('/',(req,res)=>{
    pool.query('SELECT * FROM brand')
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=> console.error(e.stack))
});
app.get('/brand/:id',(req,res)=>{
    pool.query(`SELECT cars.*,brand.name FROM cars,brand WHERE cars.brand_id=${req.params.id} AND brand.id=cars.brand_id`)
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=> console.error(e.stack))
});
app.get('/brand/cars/:name',(req,res)=>{
    pool.query(`SELECT * FROM cars WHERE name='${req.params.name}'`)
    .then(result=>{
        res.status(302).send(result.rows)
    })
    .catch(e=> console.error(e.stack))
})

app.get('/cars',(req,res)=>{
    pool.query('SELECT * FROM cars')
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=> console.error(e.stack))
})

app.get('/coming',(req,res)=>{
    pool.query('SELECT * FROM build')
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=> console.error(e.stack))
})

app.get('/contact',(req,res)=>{
    pool.query('SELECT * FROM contact')
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=> console.error(e.stack))
})

app.post('/build',(req,res)=>{
    let build=req.body;
    let brand=build.brand;
    let model=build.model;
    let type=build.type;
    let color=build.color;
    let year=build.year;
    pool.query(`INSERT INTO build (brand,model,type,color,year,img) VALUES ('${brand}','${model}','${type}','${color}',${year},'https://di-uploads-pod23.dealerinspire.com/lexusofseattle/uploads/2021/01/No-Image-Available.jpg')`)
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=>console.error(e.stack))
})
app.delete('/delete/:name',(req,res)=>{
    pool.query(`DELETE FROM build WHERE brand='${req.params.name}'`)
    .then(result=>{
        res.status(204).send('Delete')
    })
    .catch(e=> console.error(e.stack))
})



app.listen(PORT,()=>{
    console.log(`Listen on port ${PORT}`)
})
