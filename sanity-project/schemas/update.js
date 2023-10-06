export default {
    name: 'update',
    title: 'Software Update',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'blockContent',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }

    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        }
    },
}