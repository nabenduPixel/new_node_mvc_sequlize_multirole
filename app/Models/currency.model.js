const mongoose = require("mongoose");

const Currency = mongoose.model(
    "Currency",
    new mongoose.Schema({
        code: String,
        symbol: String,
        name: String,
        is_frontend: {
            type: String,
            enum: ['0', '1'],
            default: '0'
        },
        is_default: {
            type: String,
            enum: ['0', '1'],
            default: '0'
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive'],
        },
        created_by:{
            type: mongoose.Schema.Types.Mixed,
        },
        updated_by:{
            type: mongoose.Schema.Types.Mixed,
            default: '0'
        },
        created_at:{
            type: Date,
            // default: Date.now()
        },
        updated_at:{
            type: Date,
            default: Date.now()
        },
        deleted_at:{
            type: Date,
            default: false
        },
    })
);

module.exports = Currency;