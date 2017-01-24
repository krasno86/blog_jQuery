class Change < ActiveRecord::Migration[5.0]
  def self.up
rename_column :articles, :counter_comentCount, :coment_count
  end
end
