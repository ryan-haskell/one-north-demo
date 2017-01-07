module.exports = function(title, subtitle, data) {

    return {
        title: title || 'Developers',
        subtitle: subtitle || 'Look at these nerds',
        data: JSON.stringify(data || {})
    };

};
