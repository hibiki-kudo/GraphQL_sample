import {MutationResolvers, QueryResolvers, Resolvers} from "./generated/graphql";

let Posts = [
    {
        id: 1,
        title: "sample01",
        content: "<h2>sample01</h2>"
    },
    {
        id: 2,
        title: "sample02",
        content: "<h2>sample02</h2>"
    },
    {
        id: 3,
        title: "sample03",
        content: "<h2>sample03</h2>"
    }
]

const Query: QueryResolvers = {
    getPostAll: () => {
        return Posts;
    },
    getPostById: (_, {id}) => {
        return Posts.find(post => post.id === id) || null
    }
};

export const Mutation: MutationResolvers = {
    createPost: (_, {title, content}) => {
        const post = {
            id: Posts.length + 1,
            title: title,
            content: content || ""
        }
        Posts.push(post)
        return post
    },
    deletePost: (_, {id}) => {
        try {
            const postLength = Posts.length
            Posts = Posts.filter(post => post.id !== id)
            return Posts.length === postLength - 1
        } catch (error) {
            console.error(error)
            return false
        }
    }
}

export const resolvers: Resolvers = {
    Query,
    Mutation,
};
