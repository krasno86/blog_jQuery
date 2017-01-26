require 'rails_helper'

RSpec.describe "routing to articles", :type => :routing do

  it "routes /articles/index" do
    expect(:get => "/articles").to route_to(controller: "articles",
                                            action: "index")
  end

  it "does not expose a list of articles" do
    expect(:get => "/index").not_to be_routable
  end

  it "routes /articles/show" do
    expect(:get => "/articles/1").to route_to(:controller => "articles",
                                            :action => "show",
                                            :id=>"1")
  end

end