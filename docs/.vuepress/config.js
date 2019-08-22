module.exports = {
  base: '/doc/',
  dest: 'dist',
  title: '日常手记',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  description: '一起愉快的coding吧',
  themeConfig: {
    docsDir: 'docs',
    repo: 'https://github.com/vfa25/my_doc',
    nav: [
      {
        text: '偏前端',
        items: [
          { text: '那些基础', link: '/frontEnd/' },
          // { text: '哇哇笔记', link: '/caseInterview/' },
          // { text: '源码解析', link: '/sourceCode/' }
        ]
      },
      { text: 'Server', link: '/serverSide/' },
      { text: '通用', link: '/general/' }
    ],
    sidebar: {
      '/frontEnd/': [
        ['', 'Introduction'],
        {
          title: 'JS',
          collapsable: false,
          children: [
            'js/parse',
            'js/module',
          ]
        },
        {
          title: 'Parser：用JS解析JS',
          children: [
            'babel/base',
            'babel/AST',
            'babel/plugin',
          ]
        },
        {
          title: 'Web 安全',
          children: [
            'webSafe/xsrf',
            'webSafe/xss',
            'webSafe/sqlInject',
            'webSafe/other'
          ]
        },
        {
          title: '网络',
          children: [
            'internet/cors',
          ]
        },
        // {
        //   title: 'ReactNative',
        //   children: [
        //     'reactNative/introduction',
        //     'reactNative/debug',
        //     'reactNative/layout',
        //   ]
        // }
      ],
      '/caseInterview/': [
        ['', '出发吧'],
        {
          title: 'JS基础',
          collapsable: false,
          children: [
            'jsBase/executionContext',
          ]
        },
      ],
      '/sourceCode/': [
        ['', 'Introduction']
      ],
      '/serverSide/': [
        ['', 'Introduction'],
        {
          title: 'Python3',
          children: [
            'python3/base',
            'python3/prdConfig',
          ]
        },
        {
          title: 'Django',
          collapsable: false,
          children: [
            'django/base',
            'django/rest_framework',
            'django/loginStatus',
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
        ['', 'Introduction'],
        {
          title: '数据结构',
          collapsable: false,
          children: [
            'dataStructure/base',
            'dataStructure/array',
            'dataStructure/linkedList',
            'dataStructure/stack',
            'dataStructure/queue',
            'dataStructure/hashTable',
            // 'dataStructure/skipList',
            'dataStructure/heap',
            'dataStructure/binarySearchTree'
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
      ],
    }
  }
};

