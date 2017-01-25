require 'active_support/core_ext/module/delegation'

module Shoulda
  module Matchers
    module ActiveRecord

      def belong_to(user)
        AssociationMatcher.new(:belongs_to, user)
      end

      def have_many(articles)
        AssociationMatcher.new(:has_many, articles)
      end

      def with_foreign_key(user_id)
        @options[:user_id] = foreign_key
        self
      end

      def with_primary_key(article_id)
        @options[:article_id] = primary_key
        self
      end





    end
  end
end
