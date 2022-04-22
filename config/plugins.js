module.exports = {
    upload: {
      config: {
        provider: 'strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: 'fishmspotcms',
            publicFiles: true,
            uniform: false,
            basePath: '',
        },
      },
    },
}