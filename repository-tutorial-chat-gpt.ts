
createQueryBuilder() 
// - Returns a QueryBuilder instance for constructing complex queries.
// const queryBuilder = repository.createQueryBuilder('user');
// const users = await queryBuilder.where("user.id = :id", { id: 1 }).getMany();


findOne()
// - Finds an entity by its primary key or a given search criteria.
// const user = await repository.findOne(1);


find()
// - Finds entities that match the given search criteria.
// const users = await repository.find({ age: 25 });


save() 
// - Saves a given entity to the database. If the entity already exists, it updates it.
// const user = new User();
// user.name = "John";
// await repository.save(user);


remove() 
// - Removes a given entity from the database.
// const user = await repository.findOne(1);
// await repository.remove(user);


create() 
// - Creates a new instance of an entity.
// const user = repository.create({ name: "John" });


count() 
// - Counts the number of entities that match the given search criteria.
// const count = await repository.count({ age: 25 });


findAndCount() 
// - Finds entities that match the given search criteria and returns the total count of entities.
// const [users, count] = await repository.findAndCount({ age: 25 });



findOneOrFail() 
// - Finds an entity by its primary key or a given search criteria. Throws an error if no entity is found.
// const user = await repository.findOneOrFail(1);


preload() 
// - Preloads a relation of an entity based on the given search criteria.
// const user = await repository.preload({
//   id: 1,
//   addresses: {
//     id: 2
//   }
// });


insert() 
// - Inserts a new entity or entities into the database.
// const user = new User();
// user.name = "John";
// await repository.insert(user);


update() 
// - Updates entities that match the given search criteria.
// await repository.update({ age: 25 }, { age: 30 });


increment() 
// - Increments a numeric field of entities that match the given search criteria.
// await repository.increment({ id: 1 }, "age", 1);


decrement() 
// - Decrements a numeric field of entities that match the given search criteria.
// await repository.decrement({ id: 1 }, "age", 1);


query() 
// - Allows executing raw SQL queries.
// const results = await repository.query("SELECT * FROM users");


clear() 
// - Clears the repository's internal cache.
// await repository.clear();


// const entityManager = repository.manager;
findOneOrFail() 
// - Finds an entity by its primary key or a given search criteria. Throws an error if no entity is found.
// const user = await repository.findOneOrFail(1);


softRemove() 
// - Soft deletes an entity by setting its deletedAt column to the current timestamp.
// await repository.softRemove(user);


restore() 
// - Restores a soft-deleted entity by setting its deletedAt column to null.
// await repository.restore(user);


createQueryBuilderAndMapResult() 
// - Creates a QueryBuilder instance and maps its results to the given class.
// const queryBuilder = repository.createQueryBuilderAndMapResult(
//   User,
//   "user",
//   "SELECT * FROM users"
// );
// const users = await queryBuilder.execute();


findAndCount() 
// - Finds entities that match the given search criteria and returns the total count of entities.
// const [users, count] = await repository.findAndCount({ age: 25 });


createQueryBuilder() 
// - Returns a QueryBuilder instance for constructing complex queries.
// const queryBuilder = repository.createQueryBuilder("user");
// const users = await queryBuilder.where("user.age > :age", { age: 25 }).getMany();



preload() 
// - Preloads a relation of an entity based on the given search criteria.
// const user = await userRepository.preload({
//   id: 1,
//   addresses: {
//     id: 2
//   }
// });


/////////////////////////////////////
///                               ///
///             SQL               ///
///                               ///
/////////////////////////////////////


findOne() 
// to retrieve an entity by a non-primary key:
// async getUserByUsername(username: string): Promise<User> {
//   return await this.userRepository.findOne({ where: { username } });
// }

find() 
// to retrieve entities with pagination:
// async getUsers(page: number, limit: number): Promise<User[]> {
//   return await this.userRepository.find({
//     skip: (page - 1) * limit,
//     take: limit,
//   });
// }

create() 
// to create and save a new entity in a single step:
// async createUser(name: string, age: number): Promise<User> {
//   const user = this.userRepository.create({ name, age });
//   return await this.userRepository.save(user);
// }

update() 
// to update entities with complex search criteria:
// async updateUsersUnderAge(age: number, newAge: number): Promise<void> {
//   await this.userRepository.update(
//     { where: { age: LessThan(age) } },
//     { age: newAge },
//   );
// }

increment(); decrement() 
// to perform arithmetic operations on a field:

// async incrementUserPoints(id: number, points: number): Promise<void> {
//   await this.userRepository.increment({ id }, "points", points);
// }

// async decrementUserPoints(id: number, points: number): Promise<void> {
//   await this.userRepository.decrement({ id }, "points", points);
// }


delete restore()
// async deleteUser(id: number): Promise<void> {
//   await this.userRepository.softDelete(id);
// }

// async restoreUser(id: number): Promise<void> {
//   await this.userRepository.restore(id);
// }

findOneOrFail() 
// to retrieve an entity or throw an error if not found:
// async getUserById(id: number): Promise<User> {
//   return await this.userRepository.findOneOrFail(id);
// }

// query builder to write complex queries:
// async getUsersByName(name: string): Promise<User[]> {
//   return await this.userRepository
//     .createQueryBuilder("user")
//     .where("user.name = :name", { name })
//     .orderBy("user.name")
//     .getMany();
// }

save() 
// to update an existing entity:
// async updateUser(id: number, name: string): Promise<User> {
//   const user = await this.userRepository.findOneOrFail(id);
//   user.name = name;
//   return await this.userRepository.save(user);
// }


remove() 
// to delete an entity:
// async deleteUser(id: number): Promise<void> {
//   const user = await this.userRepository.findOneOrFail(id);
//   await this.userRepository.remove(user);
// }

transaction() 
// to execute multiple operations within a single transaction:
// async transferPoints(fromUserId: number, toUserId: number, points: number): Promise<void> {
//   await this.userRepository.transaction(async entityManager => {
//     const fromUser = await entityManager.findOneOrFail(User, fromUserId);
//     const toUser = await entityManager.findOneOrFail(User, toUserId);

//     fromUser.points -= points;
//     toUser.points += points;

//     await entityManager.save([fromUser, toUser]);
//   });
// }

clear() 
// to delete all entities from a repository:
// async deleteAllUsers(): Promise<void> {
//   await this.userRepository.clear();
// }


/////////////////////////////////////////////
///                                       ///
///             SQL   relation            ///
///                                       ///
/////////////////////////////////////////////

// Using relation options to load related entities:
// async getUserWithPosts(id: number): Promise<User> {
//   return await this.userRepository.findOne(id, {
//     relations: ["posts"],
//   });
// }

// async getPostsWithAuthor(): Promise<Post[]> {
//   return await this.postRepository.find({
//     relations: ["author"],
//   });
// }


// Using cascade options to automatically save or delete related entities:
// async createPost(userId: number, content: string): Promise<Post> {
//   const user = await this.userRepository.findOneOrFail(userId);
//   const post = this.postRepository.create({ content, author: user });
//   return await this.postRepository.save(post, { cascade: true });
// }
// async deleteUser(id: number): Promise<void> {
//   await this.userRepository.delete(id, { cascade: true });
// }


// Using join queries with the query builder:
// async getPostsByUser(userId: number): Promise<Post[]> {
//   return await this.postRepository
//     .createQueryBuilder("post")
//     .leftJoinAndSelect("post.author", "user")
//     .where("user.id = :userId", { userId })
//     .orderBy("post.createdAt")
//     .getMany();
// }


findAndCount() 
// method to retrieve entities and their count:
// async getUsers(page: number, limit: number): Promise<[User[], number]> {
//   const [users, count] = await this.userRepository.findAndCount({
//     skip: (page - 1) * limit,
//     take: limit,
//   });
//   return [users, count];
// }

createQueryBuilder() 
// method to build a custom query:
// async getActiveUsers(): Promise<User[]> {
//   return await this.userRepository
//     .createQueryBuilder("user")
//     .where("user.isActive = :isActive", { isActive: true })
//     .getMany();
// }

create() 
// method to create a new entity without persisting it:
// async createUser(name: string, email: string): Promise<User> {
//   const user = this.userRepository.create({ name, email });
//   return user;
// }

increment(), decrement()
// methods to update a numeric field:
// async increasePoints(userId: number, amount: number): Promise<void> {
//   await this.userRepository.increment({ id: userId }, "points", amount);
// }

// async decreasePoints(userId: number, amount: number): Promise<void> {
//   await this.userRepository.decrement({ id: userId }, "points", amount);
// }

preload() 
// method to eagerly load a specific relationship:
// async getPostsWithComments(): Promise<Post[]> {
//   return await this.postRepository.find({
//     relations: ["comments"],
//     order: {
//       createdAt: "DESC",
//     },
//     preload: ["comments"],
//   });
// }

merge() 
// method to update an entity without overwriting its entire state:
// async updateUser(id: number, name: string): Promise<User> {
//   const user = await this.userRepository.findOneOrFail(id);
//   const updatedUser = this.userRepository.merge(user, { name });
//   return await this.userRepository.save(updatedUser);
// }

// Using the query builder to construct complex queries with joins, where clauses, and more:
// async getUsersWithPostCount(): Promise<User[]> {
//   const queryBuilder = this.userRepository.createQueryBuilder("user");

//   const subQuery = this.postRepository
//     .createQueryBuilder("post")
//     .select("post.authorId, COUNT(*) as postCount")
//     .groupBy("post.authorId");

//   queryBuilder.leftJoin("(" + subQuery.getQuery() + ")", "postCounts", "postCounts.authorId = user.id");

//   queryBuilder.addSelect("postCounts.postCount", "postCount");

//   return await queryBuilder.getMany();
// }

count() 
// method to count the number of entities that match a certain criteria:
// async countActiveUsers(): Promise<number> {
//   return await this.userRepository.count({
//     where: {
//       isActive: true,
//     },
//   });
// }

// Using the delete() method to delete entities that match a certain criteria:
// async deleteInactiveUsers(): Promise<void> {
//   await this.userRepository.delete({
//     isActive: false,
//   });
// }

// Using the soft delete feature to mark an entity as deleted instead of actually deleting it from the database:
// async deletePost(id: number): Promise<void> {
//   await this.postRepository.softDelete(id);
// }

// async restorePost(id: number): Promise<void> {
//   await this.postRepository.restore(id);
// }

findAndCount() 
// method with the query builder to retrieve entities and their count with a custom query:
// async searchUsers(query: string, page: number, limit: number): Promise<[User[], number]> {
//   const queryBuilder = this.userRepository.createQueryBuilder("user");

//   queryBuilder.where("user.name ILIKE :query OR user.email ILIKE :query", {
//     query: `%${query}%`,
//   });

//   const [users, count] = await queryBuilder
//     .skip((page - 1) * limit)
//     .take(limit)
//     .getManyAndCount();

//   return [users, count];
// }


findOneOrFail() 
// method with the query builder to retrieve a single entity that matches a custom query:
// async getUserByEmail(email: string): Promise<User> {
//   return await this.userRepository
//     .createQueryBuilder("user")
//     .where("user.email = :email", { email })
//     .getOneOrFail();
// }

save() 
// method to update an existing entity:
// async updateUser(id: number, data: Partial<User>): Promise<User> {
//   const user = await this.userRepository.findOneOrFail(id);
//   const updatedUser = this.userRepository.merge(user, data);
//   return await this.userRepository.save(updatedUser);
// }

create() 
// method to create a new entity and persist it to the database:
// async createUser(data: CreateUserDto): Promise<User> {
//   const user = this.userRepository.create(data);
//   return await this.userRepository.save(user);
// }

findAndCount() 
// method with the query builder to retrieve entities and their count with a custom query that includes pagination and sorting:
// async getUsers(page: number, limit: number, sortBy: string, sortOrder: "ASC" | "DESC"): Promise<[User[], number]> {
//   const queryBuilder = this.userRepository.createQueryBuilder("user");

//   queryBuilder.orderBy(`user.${sortBy}`, sortOrder);

//   const [users, count] = await queryBuilder
//     .skip((page - 1) * limit)
//     .take(limit)
//     .getManyAndCount();

//   return [users, count];
// }


find() 
// method to retrieve entities with their related entities:
// async findAllPosts(): Promise<Post[]> {
//   return await this.postRepository.find({
//     relations: ['user', 'comments'],
//   });
// }
// This method returns all posts with their associated user and comment entities. 
// The relations option is used to specify which relationships to include in the query.


findOne() 
// method to retrieve an entity with its related entities:
// async findPostById(id: number): Promise<Post> {
//   return await this.postRepository.findOne(id, {
//     relations: ['user', 'comments'],
//   });
// }
// This method returns a single post with its associated user and comment entities. 
// The relations option is used to specify which relationships to include in the query.


createQueryBuilder() 
// method to create a custom query that joins related entities:
// async findAllUsersWithPosts(): Promise<User[]> {
//   const queryBuilder = this.userRepository.createQueryBuilder('user');
//   queryBuilder.leftJoinAndSelect('user.posts', 'post');
//   return await queryBuilder.getMany();
// }
// This method returns all users with their associated posts. 
// The leftJoinAndSelect() method is used to join the posts relationship to the query.

save() 
// method to save an entity with related entities:
// async createPost(data: CreatePostDto): Promise<Post> {
//   const post = this.postRepository.create(data);
//   post.user = await this.userRepository.findOne(data.userId);
//   post.comments = data.commentIds.map(id => {
//     const comment = new Comment();
//     comment.id = id;
//     return comment;
//   });
//   return await this.postRepository.save(post);
// }
// This method creates a new post entity with its associated user and comments. 
// The create() method is used to create the post entity, 
// and the related entities are assigned to the post entity before it is saved using the save() method.

createQueryBuilder() 
// method to create a custom query that filters entities by related entities:
// async findAllUsersWithActivePosts(): Promise<User[]> {
//   const queryBuilder = this.userRepository.createQueryBuilder('user');
//   queryBuilder.leftJoinAndSelect('user.posts', 'post');
//   queryBuilder.andWhere('post.isActive = :isActive', { isActive: true });
//   return await queryBuilder.getMany();
// }
// This method returns all users with at least one active post. 
// The leftJoinAndSelect() method is used to join the posts relationship to the query, 
// and the andWhere() method is used to filter the posts by their isActive property.


createQueryBuilder() 
// method to create a custom query that sorts entities by related entities:
// async findUsersSortedByPostCount(): Promise<User[]> {
//   const queryBuilder = this.userRepository.createQueryBuilder('user');
//   queryBuilder.leftJoinAndSelect('user.posts', 'post');
//   queryBuilder.addSelect('COUNT(post.id)', 'postCount');
//   queryBuilder.groupBy('user.id');
//   queryBuilder.orderBy('postCount', 'DESC');
//   return await queryBuilder.getMany();
// }
// This method returns all users with their associated post count sorted in descending order. 
// The leftJoinAndSelect() method is used to join the posts relationship to the query, 
// and the addSelect() method is used to add a postCount column to the query that counts the number of posts for each user. 
// The groupBy() method is used to group the results by the user ID, 
// and the orderBy() method is used to sort the results by the postCount column in descending order.

createQueryBuilder()
// method to create a custom query that paginates entities with related entities:
// async findPostsByUser(userId: number, page: number, limit: number): Promise<Post[]> {
//   const queryBuilder = this.postRepository.createQueryBuilder('post');
//   queryBuilder.leftJoinAndSelect('post.user', 'user');
//   queryBuilder.where('user.id = :userId', { userId });
//   queryBuilder.skip((page - 1) * limit);
//   queryBuilder.take(limit);
//   return await queryBuilder.getMany();
// }
// This method returns a paginated list of posts for a given user. 
// The leftJoinAndSelect() method is used to join the user relationship to the query, 
// and the where() method is used to filter the posts by the user ID. 
// The skip() and take() methods are used to implement pagination based on the page and limit parameters.

createQueryBuilder() 
// method to create a custom query that updates related entities:
// async deactivatePostsByUser(userId: number): Promise<void> {
//   const queryBuilder = this.postRepository.createQueryBuilder('post');
//   queryBuilder.update(Post).set({ isActive: false });
//   queryBuilder.where('userId = :userId', { userId });
//   return await queryBuilder.execute();
// }
// This method deactivates all posts for a given user by setting their isActive property to false. 
// The update() method is used to create an update query for the Post entity, 
// and the set() method is used to set the isActive property to false. 
// The where() method is used to filter the posts by the user ID, and the execute() method is used to execute the query.

createQueryBuilder() 
// method to create a custom query that deletes related entities:
// async deletePostsByUser(userId: number): Promise<void> {
//   const queryBuilder = this.postRepository.createQueryBuilder('post');
//   queryBuilder.delete();
//   queryBuilder.where('userId = :userId', { userId });
//   return await queryBuilder.execute();
// }
// This method deletes all posts for a given user. 
// The delete() method is used to create a delete query for the Post entity, 
// and the where() method is used to filter the posts by the user ID. 
// The execute() method is used to execute the query.

createQueryBuilder() 
// method to create a custom query that returns related entities that match a certain criteria:
// async findActivePostsByUser(userId: number): Promise<Post[]> {
//   const queryBuilder = this.postRepository.createQueryBuilder('post');
//   queryBuilder.leftJoinAndSelect('post.user', 'user');
//   queryBuilder.where('user.id = :userId', { userId });
//   queryBuilder.andWhere('post.isActive = :isActive', { isActive: true });
//   return await queryBuilder.getMany();
// }
// This method returns all active posts for a given user. 
// The leftJoinAndSelect() method is used to join the user relationship to the query, 
// and the where() method is used to filter the posts by the user ID. 
// The andWhere() method is used to add an additional condition to the query that filters the posts by their isActive property.

createQueryBuilder() 
// method to create a custom query that returns related entities that match a range of criteria:
// async findPostsByUserAndTag(userId: number, tagName: string): Promise<Post[]> {
//   const queryBuilder = this.postRepository.createQueryBuilder('post');
//   queryBuilder.leftJoinAndSelect('post.user', 'user');
//   queryBuilder.leftJoinAndSelect('post.tags', 'tag');
//   queryBuilder.where('user.id = :userId', { userId });
//   queryBuilder.andWhere('tag.name = :tagName', { tagName });
//   queryBuilder.andWhere('post.isActive = :isActive', { isActive: true });
//   return await queryBuilder.getMany();
// }
// This method returns all active posts for a given user that are associated with a certain tag. 
// The leftJoinAndSelect() method is used to join the user and tags relationships to the query, 
// and the where() method is used to filter the posts by the user ID. 
// The andWhere() method is used to add additional conditions to the query that filter the posts 
// by their isActive property and their associated tag.
