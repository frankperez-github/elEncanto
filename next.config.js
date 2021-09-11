module.exports ={
    images: {
        domains: ['elencanto-s3bucket.s3.amazonaws.com'],
      },
    webpack(config)
    {config.module.rules.push({
        test:/\.svg$/, 
        use :['@svgr/webpack'],
    });
    return config;},
   
};
