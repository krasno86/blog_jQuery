require 'spec_helper'

RSpec.describe ArticlesController, type: :controller do

  before :each do
    @user = FactoryGirl.create(:user)
    sign_in @user
    @user.articles.create(id:'1',name:'1')
  end

  after :each do
    Article.destroy_all
  end

  context 'GET #show' do

    it 'render #show' do
      get :show, :id => FactoryGirl.create(:article)
      expect(response).to render_template("show")
    end

    it 'requested article to @article' do
      article = FactoryGirl.create :article
      get :show, :id => article
      controller.instance_variable_get(:@article).name.should == article.name
    end

  end


  context 'GET #index' do

    it 'render #index' do
      # article = FactoryGirl.create :article
      get :index
      expect(response).to render_template("index")
    end

  end


end

