import React from 'react'

const Share = props => (
      <div className={props.className ? "ArticlePage--share " + props.className : "ArticlePage--share"}>
            <div className="Share--likeBook--wrp">
                  <span className="Article-likeNumber">34</span>
                  <img className="Article-like" src="/storage/Gfx/News/Article/article-like.svg" alt="Like this Article" />
                  <img className="Article-bookmark" src="/storage/Gfx/News/Article/article-bookmark.svg" alt="Book this Article" />
            </div>
            <div>
                  <img src="/storage/Gfx/News/Article/article-facebook.svg" alt="Share on Facebook" />
                  <img src="/storage/Gfx/News/Article/article-twitter.svg" alt="Share on Twitter" />
                  <img src="/storage/Gfx/News/Article/article-linkedin.svg" alt="Share on Linkedin" />
                  <div className="Article-seeMore---wrp">
                        <img className="Article-seeMoreIMG" src="/storage/Gfx/News/Article/article-more.svg" alt="See More" />
                        <div className="Article-seeMore">
                              <div className="Article-seeMore---insidewrp">
                                    <img src="/storage/Gfx/News/Article/article-slack.svg" alt="Share on Slack" />
                                    <img src="/storage/Gfx/News/Article/article-mail.svg" alt="Share in E-mail" />
                                    <img src="/storage/Gfx/News/Article/article-copylink.svg" alt="CopyLink" />
                              </div>
                        </div>
                  </div>
            </div>
      </div>
)

export default Share