require 'spec_helper'

RSpec.describe ArticlesController, :type => :controller do
  describe 'routing' do

    it do
      should route(:post, '/articles/1/coments').
          to( controller: 'articles', action: 'create', coment_id: '1' )
    end

    it do
      should route(:delete, '/articles/1/coments/1').
          to( controller: 'articles', action: 'destroy', micropost_id: '1', id: '1' )
    end
  end
end

module Shoulda
  module Matchers
    module ActionController


    end
  end
end
