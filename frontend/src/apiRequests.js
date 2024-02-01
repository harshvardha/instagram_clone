import axios from "axios";

const api = axios.create();
const baseUrl = "http://localhost:5000"

// api calls for authentication
export const authenticationApiRequests = {
    register: (registrationDetails) => api.post(`${baseUrl}/auth/register`, registrationDetails),
    login: (loginDetails) => api.post(`${baseUrl}/auth/login`, loginDetails)
}

// api calls for user info update
export const userApiRequests = {
    editProfile: (newProfileInfo, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.put(`${baseUrl}/user/editProfile`, newProfileInfo);
    },
    updateAccountCredentials: (newCredentials, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.put(`${baseUrl}/user/updateAccountCredentials`,);
    },
    deleteAccount: (accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.delete(`${baseUrl}/user/deleteAccount`);
    },
    getUserById: (userId) => {
        return api.get(`${baseUrl}/user/userById/${userId}`);
    },
    search: (query) => {
        return api.get(`${baseUrl}/user?query=${query}`);
    },
    followUser: (userId, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.put(`${baseUrl}/user/follow/${userId}`);
    },
    unfollowUser: (userId, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.put(`${baseUrl}/user/unfollow/${userId}`);
    },
    getOwnerAccountInfo: (accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.get(`${baseUrl}/user/accountOwnerInfo`);
    }
}

// api calls for posts
export const postsApiRequests = {
    createPost: (postDetails, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.post(`${baseUrl}/post/createPost`, postDetails);
    },
    updatePost: (newPostDetails, postId, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.post(`${baseUrl}/post/updatePost/${postId}`, newPostDetails);
    },
    deletePost: (postId, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.delete(`${baseUrl}/post/deletePost/${postId}`);
    },
    likeOrDislikePost: (postId, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.put(`${baseUrl}/post/likeOrDislikePost/${postId}`);
    },
    getPostById: (postId) => {
        return api.get(`${baseUrl}/post/postById/${postId}`);
    },
    getAllPosts: (userId) => {
        return api.get(`${baseUrl}/post/allPosts/${userId}`);
    },
    getTimeline: (accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.get(`${baseUrl}/post/timeline`);
    }
}

// api calls for comments on posts
export const commentsApiRequests = {
    addComment: (comment, postId, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.post(`${baseUrl}/comment/add/${postId}`, comment);
    },
    editComment: (editedComment, commentId, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.put(`${baseUrl}/comment/edit/${commentId}`, editedComment);
    },
    deleteComment: (commentId, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.delete(`${baseUrl}/comment/delete/${commentId}`);
    },
    likeOrDislikeComment: (commentId, accessToken) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api.delete(`${baseUrl}/comment/like/${commentId}`);
    }
}