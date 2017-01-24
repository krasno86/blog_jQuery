class AddCounter < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :counter_comentCount, :integer, default: 0
  end
end
