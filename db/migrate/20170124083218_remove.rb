class Remove < ActiveRecord::Migration[5.0]
  def change
    remove_column :articles, :counter_comentCount
  end
end
