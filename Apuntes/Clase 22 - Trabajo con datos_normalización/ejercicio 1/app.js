import { schema, normalize, denormalize } from 'normalizr';
import util from 'util';

const blog = {
    id: '1',
    title: 'My blog post',
    description: 'Short blogpost description',
    context: 'Hello word',
    author: {
        id: '4',
        name: 'John Doe',
    },
    comments: [
        {
            id: '1',
            author: 'Rob',
            content: 'Nice post',
        },
        {
            id: '2',
            author: 'Jane',
            content: 'I totally agree with you!!',
        },
    ],
};

const authorScheme = new schema.Entity('author');
const commentsScheme = new schema.Entity('comments');
const postScheme = new schema.Entity('posts', {
    author: authorScheme,
    comments: [commentsScheme],
});

function print(object) {
    console.log(util.inspect(object, false, 14, true));
}

console.log('-----------------------------------------------------------------------');

const dataNormalize = normalize(blog, postScheme);

print(dataNormalize);

console.log('-----------------------------------------------------------------------');

const dataDenormalize = denormalize(dataNormalize.result, postScheme, dataNormalize.entities);

print(dataDenormalize);
