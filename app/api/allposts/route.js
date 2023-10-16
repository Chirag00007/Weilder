export const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
      
        res.status(200).json({posts})
    } catch (error) {
       return res.status(500).json({message : error})
    }
}