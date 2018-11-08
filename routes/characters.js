const express = require('express')
const router = express.Router()

// Connection to database through knex
const knex = require('../db/connection')

router.get('/', (req, res) => {
//REFACTOR to implement a knex join to have the side of force
// that each character is on
  //side: 'light' or side: 'dark'

  knex('character')
    .select('character.id', 'character.name','character.height','character.mass','force.side').from('character')
    .innerJoin('force', 'character.force_id', 'force.id' )
    .orderBy('character.id', 'asc')
    .then(characters => {
      // Can only res.json once we have received the response/data from the db
      res.json({ characters: characters })
    })
})

router.get('/:id', (req, res, next) => {
  // Grab the id of the character we want from the request URL parameters
  const id = req.params.id

  knex('character')
    .select('character.id', 'character.name','character.height','character.mass','force.side', 'movie.title')
    .innerJoin('force', 'character.force_id', 'force.id')
    .innerJoin('character_movie', 'character_movie.character_id', 'character.id')
    .innerJoin('movie', 'movie.id', 'character_movie.movie_id')
    .where('character.id', id)
    .then(character => {
      res.json({ character: character })
    })
})





router.post('/', (req, res, next) => {
  // Pull the data that is to be posted from the request body
  const body = req.body

  knex('character')
    .insert(body)
    .returning('*')
    .then(character => {
      res.json({ character: character[0] })
    })
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  knex('character')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedCharacter => {
      res.json({ character: updatedCharacter[0] })
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  knex('character')
    .where('id', id)
    .delete()
    .returning('*')
    .then(deletedCharacter => {
      res.json({ character: deletedCharacter[0] })
    })
})



module.exports = router
