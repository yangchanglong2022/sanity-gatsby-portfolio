export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '629d83f86924e54db5fb2034',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u9t6cdw1',
                  apiId: '9b23468b-790c-493c-8f9a-12c2c0a6e79a'
                },
                {
                  buildHookId: '629d83f9b6d18e43c0d00726',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fhms89ne',
                  apiId: '1e380235-d5fb-49ae-b026-5e94dd46fc35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yangchanglong2022/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fhms89ne.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
