<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beritas')->insert([
            'id_artikel' => fake()->numberBetween(1, 100),
            'id_kategori' => fake()->numberBetween(1, 10),
            'judul' => fake()->title(),
            'isi' => fake()->paragraph(),
            'penulis' => fake()->name(),
            'tanggal' => fake()->date(),
        ]);
    }
}
