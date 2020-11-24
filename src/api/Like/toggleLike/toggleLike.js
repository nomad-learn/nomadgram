export default {
  Mutation: {
    toggleLike: async (_, args, { request, isAuthenticated, prisma }) => {
      isAuthenticated(request);
      const { postId } = args;
      const { user } = request;
      const filterOptions = {
        where: {
          AND: [{ userId: user.id }, { postId }],
        },
      };
      try {
        const existedLike = await prisma.like.findMany(filterOptions);
        if (existedLike.length > 0) {
          await prisma.like.deleteMany(filterOptions);
        } else {
          await prisma.like.create({
            data: {
              user: {
                connect: {
                  id: user.id,
                },
              },
              post: {
                connect: {
                  id: postId,
                },
              },
            },
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
