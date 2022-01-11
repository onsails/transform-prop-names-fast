export default {
  Object: {
    camel: { userId: 1, name: 'John', avatarUrl: null },
    snake: { user_id: 1, name: 'John', avatar_url: null },
  },
  'Array of objects': {
    camel: [{ userId: 1, name: 'John', avatarUrl: null }, { userId: 2 }],
    snake: [{ user_id: 1, name: 'John', avatar_url: null }, { user_id: 2 }],
  },
  'Deep object': {
    camel: {
      userId: 1,
      friends: [
        { userId: 3 },
        { userId: 4, friends: [{ userId: 5 }] },
      ],
    },
    snake: {
      user_id: 1,
      friends: [
        { user_id: 3 },
        { user_id: 4, friends: [{ user_id: 5 }] },
      ],
    },
  },
};
