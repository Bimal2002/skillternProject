import React from 'react';
import '../../../assets/css/drivschol.css';
import blogImage1 from '../../../assets/images/blog/blog-1-1.png';
import blogImage2 from '../../../assets/images/blog/blog-1-2.png';
import blogImage3 from '../../../assets/images/blog/blog-1-3.png';
import authorImage1 from '../../../assets/images/blog/blog-author-1-1.png';
import authorImage2 from '../../../assets/images/blog/blog-author-1-2.png';
import authorImage3 from '../../../assets/images/blog/blog-author-1-3.png';
// import './blog.css';


import date from '../../../assets/images/shapes/date.png';

const BlogSection = () => {
  const blogPosts = [
    {
      image: blogImage1,
      alt: '5 Ways That Can Develop Your Driving Skill',
      date: { day: '31', month: 'July', year: '2023' },
      authorImage: authorImage1,
      authorName: 'Darrell Steward',
      authorTitle: 'Teacher',
      title: '5 Ways That Can Develop Your Driving Skill',
      link: 'blog-details-right.html'
    },
    {
      image: blogImage2,
      alt: 'Five Ways That Can Develop Your Driving Skill',
      date: { day: '02', month: 'July', year: '2023' },
      authorImage: authorImage2,
      authorName: 'Ralph Edwards',
      authorTitle: 'Teacher',
      title: 'Five Ways That Can Develop Your Driving Skill',
      link: 'blog-details-right.html'
    },
    {
      image: blogImage3,
      alt: 'Five Ways That Can Develop Your Driving Skill',
      date: { day: '03', month: 'July', year: '2023' },
      authorImage: authorImage3,
      authorName: 'Albert Flores',
      authorTitle: 'Teacher',
      title: 'Five Ways That Can Develop Your Driving Skill',
      link: 'blog-details-right.html'
    }
  ];

  return (
    <section className="blog-one blog-one__home">
      <div className="container">
        <div
          className="sec-title text-center wow fadeInUp"
          data-wow-duration="300ms"
        >
          <h6 className="sec-title__tagline">
            <i className="icon-left-arrow sec-title__img"></i>
            Articles
            <i className="icon-right-arrow sec-title__img"></i>
          </h6>
          <h3 className="sec-title__title">
            Latest News & Articles from <br />
            the Blog Posts
          </h3>
        </div>
        <div className="blog-one__row flex m-5">
          {blogPosts.map((post, index) => (
            <div key={index} className="item m-2">
              <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={`${index * 100}ms`}>
                <div className="blog-card__image">
                  <div className="blog-card__image-item">
                    <img src={post.image} alt={post.alt} />
                  </div>
                  <a href={post.link} className="blog-card__image-link">
                    <span className="sr-only">{post.alt}</span>
                  </a>
                  <div className="blog-card__date">
                    <h2 className="blog-card__date__month">{post.date.day}</h2>
                    <span className="blog-card__date__year">{post.date.month} {post.date.year}</span>
                    <img className="date__shape" src={date} alt="" />
                  </div>
                </div>
                <div className="blog-card__content">
                  <a href={post.link} className="blog-card__meta">
                    <div className="blog-card__content-thumb">
                      <div className="author-img">
                        <img src={post.authorImage} alt="" />
                      </div>
                    </div>
                    <div className="blog-card__content-author">
                      <h6 className="author-name">{post.authorName}</h6>
                      <span className="author-title">{post.authorTitle}</span>
                    </div>
                  </a>
                  <h3 className="blog-card__title">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <a href={post.link} className="blog-card__link">Read more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
