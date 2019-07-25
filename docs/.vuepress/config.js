module.exports = {
  base: '/doc/',
  dest: 'dist',
  title: '日常手记',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  description: '一起愉快的coding吧',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [
      { text: '偏前端', link: '/frontEnd/' },
      { text: 'Server端', link: '/serverSide/' },
      { text: '通用', link: '/general/' },
      { text: 'Github', link: 'https://github.com/vfa25/my_doc' }
    ],
    sidebar: {
      '/frontEnd/': [
        {
          title: '前言',
          collapsable: false,
          children: [
            ['', 'Introduction']
          ]
        },
        {
          title: 'Babel',
          collapsable: false,
          children: [
            'babel/AST',
          ]
        }
        // {
        //   title: 'ReactNative',
        //   children: [
        //     'reactNative/introduction',
        //     'reactNative/debug',
        //     'reactNative/layout',
        //     'reactNative/navigation'
        //   ]
        // }
      ],
      '/serverSide/': [
        {
          title: '开场白',
          collapsable: false,
          children: [
            ['', 'Introduction']
          ]
        },
        {
          title: 'Python3',
          children: [
            'python3/base',
            'python3/function'
          ]
        },
        {
          title: 'Django',
          collapsable: false,
          children: [
            'django/base',
            'django/rest_framework',
          ]
        },
        {
          title: 'Scrapy',
          children: [
            'scrapy/base'
          ]
        },
        {
          title: 'Nginx',
          children: [
            'nginx/base'
          ]
        },
        {
          title: '服务器配置（操作系统Ubuntu）',
          children: [
            'config/base',
            'config/account',
            'config/safe',
            'config/env',
            'config/nginx',
            'config/domainName',
            'config/pm2',
            'config/database',
          ]
        },
      ],
      '/general/': [
        {
          title: '开场白',
          collapsable: false,
          children: [
            ['', 'Introduction']
          ]
        },
        {
          title: '数据结构',
          collapsable: false,
          children: [
            'dataStructure/base',
            'dataStructure/array',
            'dataStructure/linkedList',
            'dataStructure/stack',
            'dataStructure/queue',
            // 'dataStructure/skipList',
            'dataStructure/hashTable',
          ]
        },
        {
          title: '算法',
          collapsable: false,
          children: [
            'algorithm/base',
            'algorithm/recursion',
            'algorithm/sort',
            'algorithm/binarySearch',
          ]
        },
        {
          title: 'Web 安全',
          children: [
            'webSafe/xsrf',
            'webSafe/other'
          ]
        },
      ],
    }
  }
};

