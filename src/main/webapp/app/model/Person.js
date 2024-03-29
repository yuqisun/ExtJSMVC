Ext.define('MVC.model.Person', {
    extend : 'Ext.data.Model',
    
    fields : [
        {
            name : 'name',
            type : 'string'
        },
        {
            name : 'email',
            type : 'string'
        },
        {
            name : 'phone',
            type : 'string'
        },
        {
            name : 'id',
            type : 'string'
        }
    ]
});