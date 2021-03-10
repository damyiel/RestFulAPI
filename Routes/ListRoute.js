const express = require('express')
const router = express.Router()
const List = require('../models/List')

//Create
router.post('/', async (req,res) => {
    const list = new List({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedList = await list.save()
        res.json(savedList)
        
    } catch (error) {
        res.json({message: err})
    }
})

//Read
router.get('/', async (req,res) => {
    try {
        const list = await List.find();
        res.json(list);
    } catch (error) {
        res.json({message: err})
    }
})

router.get('/:listID', async (req,res) => {
    try {
        const list = await List.findById({_id: req.params.listID});
        res.json(list);
    } catch (error) {
        res.json({message: err})
    }
})


//Update
router.put('/:listID', async(req,res) => {
    try {
        const updateList = await List.updateOne(
            {_id: req.params.listID},
            {$set: {
                title: req.body.title,
                description: req.body.description
            }}
        )
        const list = await List.findById({_id: req.params.listID});
        res.json(list);
    } catch (error) {
        res.json({message: err})
    }
})

//Delete
router.delete('/:listID', async(req,res) => {
    try {
        const deleteList = await List.deleteOne({_id: req.params.listID})
        
        res.json(deleteList)
    } catch (err) {
        res.json({message: err})
    }
})


module.exports = router;