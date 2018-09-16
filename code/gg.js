const GoogleImages = require('./googleimages.js');

const client = new GoogleImages('006011687390905534066:r_dccn7wdg8', 'AIzaSyD7qyVbaAA-rYYcS8ha7U__E6CIHZvO53Y');

const config = {
  fileType: 'png',
  size: 'xlarge', //icon, small, medium, large, xlarge, xxlarge, and huge.
  type: 'photo',//clipart, face, lineart, news, and photo.
  //safe: 'active',//active, off,
  //rights:'cc_publicdomain',//cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived,
  hq:'source=lnt'
};

client.search('Apple', config)
  .then(images => {
    //console.log(images);
  });
