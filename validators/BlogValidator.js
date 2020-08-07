const { celebrate , Joi, Segments} = require('celebrate');

module.exports = {
    create: celebrate ({
        [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        text: Joi.string().required(),
        date: Joi.date().required(),
        author: Joi.string().required(),
        }),
    }),
    update: celebrate ({
        [Segments.BODY]: Joi.object().keys({
        title: Joi.string(),
        text: Joi.string(),
        date: Joi.date(),
        author: Joi.string().required(),    
        }),
    }),
    eliminate: celebrate ({
        [Segments.BODY]: Joi.object().keys({
        first_name: Joi.string(),
        last_name: Joi.string(),
        email: Joi.string(),    
        }),
    }),
};