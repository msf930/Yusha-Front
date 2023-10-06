export default {
    name: 'post',
    title: 'Blog Post',
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
            name: 'author',
            title: 'Author',
            type: 'string',
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
        },
        {
            title: 'Is this a Software Update?',
            name: 'update',
            type: 'boolean'
        }

    ],
    orderings: [
        {
            title: 'Published Date',
            name: 'publishedDateDesc',
            by: [
                {field: 'publishedAt', direction: 'desc'}
            ]
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'mainImage',
        },
        prepare(selection) {
            const {author} = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}