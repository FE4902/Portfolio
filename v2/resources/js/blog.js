const api_post = async () => {
    const params = {
        accessToken:
            "af0a8ffd3c1d0387617a6a14c752ed6d_f052fe531866227795a444ec3042d71e",
        outputType: "json",
        blogName: "fe4902",
    };
    const url = `https://www.tistory.com/apis/post/list?access_token=${params.accessToken}&output=${params.outputType}&blogName=${params.blogName}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        render(data.tistory.item.posts.slice(0, 5));
    } catch (error) {
        console.error(error);
    }
};

const blogList = document.querySelector(".blog__list");
const render = (posts) => {
    blogList.innerHTML = `
        ${posts
            .map(
                (post) => `
                <li class="post">
                    <a class="post__body" href="${
                        post.postUrl
                    }" target="_blank">
                        <h4 class="post__title">${post.title}</h4>
                        <p class="post__date">${post.date.split(" ")[0]}</p>
                    </a>
                </li>
        `
            )
            .join("")}
    `;
};

api_post();
