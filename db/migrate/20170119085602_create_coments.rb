class CreateComents < ActiveRecord::Migration[5.0]
  def change
    create_table :coments do |t|
      t.integer :article_id
      t.integer :user_id
      t.string :text

      t.timestamps
    end
  end
end
