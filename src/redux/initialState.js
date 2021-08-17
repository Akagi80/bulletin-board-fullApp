export const initialState = {
  posts: {
    data: [
      {
        id: 1,
        title: 'Announcement 1',
        price: '250$',
        content:
          'Vivamus sapien nulla, porta sit amet est at, bibendum viverra massa. Vestibulum dignissim tincidunt velit vel laoreet. Curabitur ut enim odio. Praesent aliquet, risus id venenatis mollis, orci lacus ultrices dolor, vitae lacinia nisl odio sed neque. Sed laoreet sollicitudin dolor vel luctus. Ut elementum nec felis id scelerisque. Vivamus quis neque feugiat nulla tincidunt cursus. Phasellus nibh diam, ornare sed consectetur sit amet, lacinia quis nulla. Aliquam tellus ante, mattis at turpis vitae, blandit lobortis turpis.',
        publicationDate: '2021.08.01',
        updateDate: '2021.08.17',
        email: 'john.doe@excample.com',
        image:
          'https://i.postimg.cc/63r08Sgf/pexels-edward-jenner-4252666.jpg',
        phone: '123456789',
        location: 'Warsaw',
        status: 'published',
      },
      {
        id: 2,
        title: 'Announcement 2',
        price: '150$',
        content:
          'Vivamus sapien nulla, porta sit amet est at, bibendum viverra massa. Vestibulum dignissim tincidunt velit vel laoreet. Curabitur ut enim odio. Praesent aliquet, risus id venenatis mollis, orci lacus ultrices dolor, vitae lacinia nisl odio sed neque. Sed laoreet sollicitudin dolor vel luctus. Ut elementum nec felis id scelerisque. Vivamus quis neque feugiat nulla tincidunt cursus. Phasellus nibh diam, ornare sed consectetur sit amet, lacinia quis nulla. Aliquam tellus ante, mattis at turpis vitae, blandit lobortis turpis.',
        publicationDate: '2021.08.11',
        updateDate: '2021.08.15',
        email: 'amanda.doe@excample.com',
        image:
          'https://i.postimg.cc/63r08Sgf/pexels-edward-jenner-4252666.jpg',
        phone: '987654321',
        location: 'Berlin',
        status: 'published',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
