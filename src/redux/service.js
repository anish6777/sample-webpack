const requester = require('./requester');

const resourceUrl = "https://6ef6ab3a-7a17-4af3-970b-93d20b93e59a.mock.pstmn.io" ;

export function getPs() {
    const serviceUrl = `${resourceUrl}/p`;
    return requester.get(serviceUrl);
}

