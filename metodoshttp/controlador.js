const moviesStatic = require('../sample.json');
let movies = moviesStatic;

var controlador = {

  mimetodo(req, res)  {
    const data = {
      name: 'Fazt',
      website: 'faztweb.com'
    };
  
    //funciona con return y sin el (el return se usa para controlar el flujo y salir de la funcion)
    res.json(data);   //en vez de send usa json
  },


  
  getAll(req, res) {
    res.json(movies);
  },


  getById(req, res) {
    const id = req.params.id;
  
    movies.forEach((movie) => {
      if (movie.id == id) {
        return res.status(200).json(movie);
      } 
    });

    res.status(404).json({error: 'Pelicula no encontrada.'});
  },


  create(req, res) {    
    const { title, director, year, rating } = req.body;
      
    if (title && director && year && rating) {
      const id = movies.length + 1;
      //const newMovie = { ...req.body, id };
      const newMovie = {
        id,   
        title,  //es igual que title: title
        director,
        year,
        rating
      };
      movies.push(newMovie);
      res.status(201).json(newMovie);
    } else {
      res.status(500).json({error: 'There was an error.'});
    }
  },


  update(req, res) {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
  
    if (id && title && director && year && rating) {
      movies.forEach(movie => {
        if (movie.id == id) {     //no puede ser === a veces pone el numero como string y fallaria
          movie.title = title;
          movie.director = director;
          movie.year = year;
          movie.rating = rating;

          return res.status(200).json(movie);
        }
      });

      res.status(404).json({error: 'No encuentra la pelicula'});
    } else {
      res.status(500).json({error: 'There was an error. Falta un campo en el body'});
    }
  },


  delete(req, res) {
    const {id} = req.params;
    
    let movie;
    for (let i=0; i<movies.length; i++) {    //recorre el array, y coge un elemento y un indice
      if (movies[i].id == id) {
        movie = movies[i];
        movies.splice(i, 1);    //borra
        return res.status(200).json(movie);
      }
    }
    //res.json(movies);     //devuelve todo el array, ya sin la borrada
    
  }

};


module.exports = controlador;