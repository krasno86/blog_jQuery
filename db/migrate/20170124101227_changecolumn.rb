class Changecolumn < ActiveRecord::Migration[5.0]
  def self.up
    rename_column :articles, :coment_count, :coments_count
  end
end
