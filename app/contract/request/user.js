module.exports = {
    user: {
        id: {
            type: "string",
            required: true,
            example: "1"
        },
        name: {
            type: "string",
            required: false,
            example: "hello"
        },
        age: {
            type: "number",
            required: false,
            example: 6
        },
        created_at: {
            type: "string",
            required: false,
            example: "文件创建时间"
        },
        updated_at: {
            type: "string",
            required: false,
            example: "文件更新时间"
        },
    }
}