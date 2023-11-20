import type { Schema, Attribute } from '@strapi/strapi';

export interface FeaturedBlogFeaturedSpot extends Schema.Component {
  collectionName: 'components_featured_blog_featured_spots';
  info: {
    displayName: 'Blog Featured Spot';
    icon: 'ad';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    image: Attribute.Media & Attribute.Required;
    spotLink: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'featured.blog-featured-spot': FeaturedBlogFeaturedSpot;
    }
  }
}
