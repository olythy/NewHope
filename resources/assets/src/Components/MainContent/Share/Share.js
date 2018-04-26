import React from 'react'

const Share = props => (
      <div className={props.className ? "ArticlePage--share " + props.className : "ArticlePage--share"}>
            <div className="Share--likeBook--wrp">
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
                                    <img src="/storage/Gfx/News/Article/article-copylink.svg" alt="CopyLink" />
                              </div>
                        </div>
                  </div>
            </div>
      </div>
)

export default Share