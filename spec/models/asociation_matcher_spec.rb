require 'active_support/core_ext/module/delegation'

module Shoulda
  module Matchers
    module ActiveRecord

      def have_and_belong_to_many(name)
        AssociationMatcher.new(:has_and_belongs_to_many, name)
      end

      def have_many(user)
        AssociationMatcher.new(:has_many, user)
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
