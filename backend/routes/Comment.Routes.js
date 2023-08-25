const express = require("express");
const { check } = require("express-validator");

const {
    postAddComment,
    putEditComment,
    deleteComment,
    putLikeComment
} = require("../controllers/Comment.Controller");
const verifyAccessToken = require("../middlewares/VerifyAccessToken.middleware");

const commentRouter = express.Router();

// Route for adding comment
commentRouter.post(
    "/add/:postId",
    [
        check("description").notEmpty()
    ],
    verifyAccessToken,
    postAddComment
);

// Route for editing comment
commentRouter.put(
    "/edit/:commentId",
    [
        check("description").notEmpty()
    ],
    verifyAccessToken,
    putEditComment
)

// Route for deleting comment
commentRouter.delete("/delete/:commentId", verifyAccessToken, deleteComment);

// Route for like comment
commentRouter.put("/like/:commentId", verifyAccessToken, putLikeComment);

module.exports = commentRouter;