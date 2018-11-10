/**
* @apiGroup anuncios
* @api {get} /api/doggo/anuncios Return an array of ads.
* @apiSuccess {Object[]} anuncio       Array of ads.
* @apiSuccess {String} anuncio.img Image Url of the ad.
* @apiSuccess {String} anuncio._id  Mongo unique id of the ad.
* @apiSuccess {String} anuncio.user_name  User name of the ad creator.
* @apiSuccess {String} anuncio.user_id  Mongo unique id of the user that created the ad.
* @apiSuccess {String} anuncio.user_phone  User phone.
* @apiSuccess {String} anuncio.titulo  Title of the Ad.
* @apiSuccess {String} anuncio.data  Data creaton of the Ad.
*/

/**
* @apiGroup anuncios
* @api{get} /api/doggo/anuncios/:id Return an ad by id.
* @apiParam {String} id Ad unique ID.
* @apiSuccess {String} img Image Url of the ad.
* @apiSuccess {String} _id  Mongo unique id of the ad.
* @apiSuccess {String} user_name  User name of the ad creator.
* @apiSuccess {String} user_id  Mongo unique id of the user that created the ad.
* @apiSuccess {String} user_phone  User phone.
* @apiSuccess {String} titulo  Title of the Ad.
* @apiSuccess {String} data  Data creaton of the Ad.
*/

/**
* @apiGroup anuncios
* @api {get} /api/doggo/anuncios/usuario/:id Return an array of ads by user id.
* @apiParam {String} id User unique ID. 
* @apiSuccess {Object[]} anuncio       Array of ads.
* @apiSuccess {String} anuncio.img Image Url of the ad.
* @apiSuccess {String} anuncio._id  Mongo unique id of the ad.
* @apiSuccess {String} anuncio.user_name  User name of the ad creator.
* @apiSuccess {String} anuncio.user_id  Mongo unique id of the user that created the ad.
* @apiSuccess {String} anuncio.user_phone  User phone.
* @apiSuccess {String} anuncio.titulo  Title of the Ad.
* @apiSuccess {String} anuncio.data  Data creaton of the Ad.
*/

/**
* @apiGroup anuncios
* @api {post} /api/doggo/anuncios Create an new ad.
* @apiParam {String} user_name User name.
* @apiParam {String} user_id User id.
* @apiParam {String} user_phone User phone.
* @apiParam {String} local Local.
* @apiParam {String} descricao Description of the ad. 
* @apiParam {String} titulo Ad's title.
* @apiSuccess {String} img Image Url of the ad.
* @apiSuccess {String} _id  Mongo unique id of the ad.
* @apiSuccess {String} user_name  User name of the ad creator.
* @apiSuccess {String} user_id  Mongo unique id of the user that created the ad.
* @apiSuccess {String} user_phone  User phone.
* @apiSuccess {String} titulo  Title of the Ad.
* @apiSuccess {String} data  Data creaton of the Ad.
*/

/**
* @apiGroup anuncios
* @api {put} /api/doggo/anuncios/:id Update an existing ad.
* @apiParam {String} id Ad unique id (Obrigatory).
* @apiParam {String} user_id User id (Optional).
* @apiParam {String} user_phone User phone (Optional).
* @apiParam {String} local Local (Optional).
* @apiParam {String} descricao Description of the ad (Optional). 
* @apiParam {String} titulo Ad's title (Optional).
* @apiSuccess {String} img Image Url of the ad.
* @apiSuccess {String} _id  Mongo unique id of the ad.
* @apiSuccess {String} user_name  User name of the ad creator.
* @apiSuccess {String} user_id  Mongo unique id of the user that created the ad.
* @apiSuccess {String} user_phone  User phone.
* @apiSuccess {String} titulo  Title of the Ad.
* @apiSuccess {String} data  Data creaton of the Ad.
*/

/**
 * @apiGroup Usuarios
 * @api {get} /api/doggo/usuarios/:id Get user by id.
 * @apiParam {String} id User unique id (Obrigatory).
 */

 /**
 * @apiGroup Usuarios
 * @api {get} /api/doggo/login Log on user in the system.
 * @apiParam {String} email User email (Obrigatory).
 * @apiParam {String} password User password (Obrigatory).
 * @apiSuccess {String} Token Jason Web Token that expires in 3600sec.
 * @apiSuccess {String} email User's email.
 * @apiSuccess {String} name User's name.
 * @apiSuccess {String} phone User's phone number.
 * @apiSuccess {String} id User's unique id.
 */

/**
 * @apiGroup Usuarios
 * @api {post} /api/doggo/usuarios Add a new user
 * @apiParam {String} email User's email (Obrigatory).
 * @apiParam {String} password User's passowrd (Obrigatory).
 * @apiParam {String} name User's name (Obrigatory).
 * @apiParam {String} phone User's phone number (Obrigatory).
 */

/**
 * @apiGroup Usuarios
 * @api {put} /api/doggo/usuarios/:id Update an user
 * @apiParam {String} email User's email.
 * @apiParam {String} password User's passowrd.
 * @apiParam {String} name User's name .
 * @apiParam {String} phone User's phone number.
 */

 // apidoc -o apidoc/  dentro da pasta doggo-api/src