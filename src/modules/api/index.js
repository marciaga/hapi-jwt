exports.register = function (server, options, next) {

    /*
    server.route({
        method: 'GET',
        path: '/stories/{slug}',
        handler: {
            proxy: {
                mapUri: (request, callback) => {
                    const slug = request.params.slug;
                    callback(null, `${API_DOMAIN}/?slug=${slug}`);
                }
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/json/{slug}',
        handler: {
            proxy: {
                mapUri: (request, callback) => {
                    const slug = request.params.slug;
                    callback(null, `${BASE_DOMAIN}/json/${slug}`);
                }
            }
        }
    });

    // // proxy for JSON article data
    // server.route({
    //     method: 'GET',
    //     path: '/feed/recent',
    //     handler: {
    //         proxy: {
    //             mapUri: (request, callback) => {
    //                 const site = 'www.whowhatwear.com';
    //                 callback(null, `http://${BASE_DOMAIN}/feed/recent?site=${site}`);
    //             }
    //         }
    //     }
    // });
*/
    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};
