class AddComentCount < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :coment_count, :integer, default: 0
  end
end
