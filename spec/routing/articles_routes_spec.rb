require 'rails_helper'

RSpec.describe "routing to articles", :type => :routing do
  it "routes /articles/index to articles#index for articles" do
    expect(:get => "/index/6").to route_to( :controller => "articles",
                                                    :action => "index")
  end

  it "does not expose a list of articles" do
    expect(:get => "/index").not_to be_routable
  end
end